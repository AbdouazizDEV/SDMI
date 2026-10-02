"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { QuoteCartPanel } from "@/components/features/quote/quote-cart-panel";
import { useQuoteCart } from "@/components/providers/quote-cart-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { siteConfig, type SiteLocale } from "@/lib/site";
import { quoteContactPayloadSchema } from "@/lib/validation/quote-contact";

const formSchema = quoteContactPayloadSchema
  .omit({ consentPersonalData: true })
  .extend({
    consentPersonalData: z.boolean().refine((value) => value === true),
  });

type FormValues = z.input<typeof formSchema>;

type QuoteRequestFormProps = {
  initialProductReference?: string;
};

export function QuoteRequestForm({ initialProductReference }: QuoteRequestFormProps) {
  const t = useTranslations("Quote");
  const locale = useLocale() as SiteLocale;
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const { items, clearCart } = useQuoteCart();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      locale,
      country: "SN",
      productReference: initialProductReference ?? "",
      consentPersonalData: false,
    },
  });

  useEffect(() => {
    if (initialProductReference) {
      setValue("productReference", initialProductReference);
    }
  }, [initialProductReference, setValue]);

  async function onSubmit(values: FormValues) {
    setStatus("idle");
    const contactParsed = quoteContactPayloadSchema.safeParse({
      ...values,
      consentPersonalData: values.consentPersonalData ? true : undefined,
    });

    if (!contactParsed.success) {
      setStatus("error");
      return;
    }

    const lines = items.map((item) => ({
      productId: item.productId ?? `slug:${item.slug}`,
      quantity: item.quantity,
      unit: item.unit,
      lineNotes: item.reference,
    }));

    const response = await fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...contactParsed.data,
        lines: lines.length ? lines : undefined,
      }),
    });

    if (!response.ok) {
      setStatus("error");
      return;
    }

    setStatus("success");
    clearCart();
    reset({
      locale,
      country: "SN",
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      productReference: "",
      message: "",
      consentPersonalData: false,
    });
  }

  return (
    <div>
      <QuoteCartPanel />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <input type="hidden" {...register("locale")} value={locale} />

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <label htmlFor="companyName" className="text-sm font-semibold">
              {t("companyName")}
            </label>
            <Input id="companyName" autoComplete="organization" {...register("companyName")} />
            {errors.companyName ? (
              <p className="text-destructive text-xs">{t("fieldRequired")}</p>
            ) : null}
          </div>
          <div className="space-y-1.5">
            <label htmlFor="contactName" className="text-sm font-semibold">
              {t("contactName")}
            </label>
            <Input id="contactName" autoComplete="name" {...register("contactName")} />
            {errors.contactName ? (
              <p className="text-destructive text-xs">{t("fieldRequired")}</p>
            ) : null}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-sm font-semibold">
              {t("email")}
            </label>
            <Input id="email" type="email" autoComplete="email" {...register("email")} />
            {errors.email ? (
              <p className="text-destructive text-xs">{t("emailInvalid")}</p>
            ) : null}
          </div>
          <div className="space-y-1.5">
            <label htmlFor="phone" className="text-sm font-semibold">
              {t("phone")}
            </label>
            <Input id="phone" type="tel" autoComplete="tel" {...register("phone")} />
          </div>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="productReference" className="text-sm font-semibold">
            {t("productReference")}
          </label>
          <Input id="productReference" {...register("productReference")} />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="message" className="text-sm font-semibold">
            {t("message")}
          </label>
          <textarea
            id="message"
            rows={5}
            className="border-input focus-visible:border-ring focus-visible:ring-ring/50 w-full rounded-lg border bg-transparent px-2.5 py-2 text-sm outline-none focus-visible:ring-3"
            {...register("message")}
          />
        </div>

        <div className="flex gap-2">
          <input
            id="consentPersonalData"
            type="checkbox"
            className="mt-1 size-4 rounded border"
            {...register("consentPersonalData")}
          />
          <label htmlFor="consentPersonalData" className="text-muted-foreground text-sm">
            {t("consent")}
          </label>
        </div>
        {errors.consentPersonalData ? (
          <p className="text-destructive text-xs">{t("consentRequired")}</p>
        ) : null}

        {status === "success" ? (
          <p className="text-primary text-sm font-semibold" role="status">
            {t("success")}
          </p>
        ) : null}
        {status === "error" ? (
          <p className="text-destructive text-sm font-semibold" role="alert">
            {t("error")}
          </p>
        ) : null}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-cta text-cta-foreground hover:bg-cta/90 rounded-sm font-semibold"
        >
          {isSubmitting ? t("submitting") : t("submit")}
        </Button>

        <p className="text-muted-foreground text-xs">
          {t("fallbackContact", { email: siteConfig.contact.email })}
        </p>
      </form>
    </div>
  );
}

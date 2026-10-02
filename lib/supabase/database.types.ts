export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      application_sectors: {
        Row: {
          created_at: string;
          description: Json | null;
          id: string;
          image_storage_path: string | null;
          name: Json;
          show_on_home: boolean;
          slug: string;
          sort_order: number;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          description?: Json | null;
          id?: string;
          image_storage_path?: string | null;
          name: Json;
          show_on_home?: boolean;
          slug: string;
          sort_order?: number;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          description?: Json | null;
          id?: string;
          image_storage_path?: string | null;
          name?: Json;
          show_on_home?: boolean;
          slug?: string;
          sort_order?: number;
          updated_at?: string;
        };
        Relationships: [];
      };
      client_logos: {
        Row: {
          created_at: string;
          id: string;
          is_published: boolean;
          logo_storage_path: string;
          name: string;
          sort_order: number;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          is_published?: boolean;
          logo_storage_path: string;
          name: string;
          sort_order?: number;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          is_published?: boolean;
          logo_storage_path?: string;
          name?: string;
          sort_order?: number;
          updated_at?: string;
        };
        Relationships: [];
      };
      home_documentation_highlights: {
        Row: {
          icon_slug: string;
          id: string;
          sort_order: number;
          storage_path: string;
          translation_key: string;
        };
        Insert: {
          icon_slug?: string;
          id?: string;
          sort_order?: number;
          storage_path: string;
          translation_key: string;
        };
        Update: {
          icon_slug?: string;
          id?: string;
          sort_order?: number;
          storage_path?: string;
          translation_key?: string;
        };
        Relationships: [];
      };
      home_key_figures: {
        Row: {
          id: string;
          sort_order: number;
          translation_key: string;
          value: string;
        };
        Insert: {
          id?: string;
          sort_order?: number;
          translation_key: string;
          value: string;
        };
        Update: {
          id?: string;
          sort_order?: number;
          translation_key?: string;
          value?: string;
        };
        Relationships: [];
      };
      home_settings: {
        Row: {
          hero_image_alt: Json;
          hero_image_storage_path: string;
          id: number;
          updated_at: string;
        };
        Insert: {
          hero_image_alt: Json;
          hero_image_storage_path: string;
          id?: number;
          updated_at?: string;
        };
        Update: {
          hero_image_alt?: Json;
          hero_image_storage_path?: string;
          id?: number;
          updated_at?: string;
        };
        Relationships: [];
      };
      home_trust_indicators: {
        Row: {
          icon_slug: string;
          id: string;
          sort_order: number;
          translation_key: string;
          value: string;
        };
        Insert: {
          icon_slug?: string;
          id?: string;
          sort_order?: number;
          translation_key: string;
          value: string;
        };
        Update: {
          icon_slug?: string;
          id?: string;
          sort_order?: number;
          translation_key?: string;
          value?: string;
        };
        Relationships: [];
      };
      connection_types: {
        Row: {
          created_at: string;
          id: string;
          name: Json;
          slug: string;
          sort_order: number;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          name: Json;
          slug: string;
          sort_order?: number;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          name?: Json;
          slug?: string;
          sort_order?: number;
          updated_at?: string;
        };
        Relationships: [];
      };
      materials: {
        Row: {
          created_at: string;
          id: string;
          name: Json;
          slug: string;
          sort_order: number;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          name: Json;
          slug: string;
          sort_order?: number;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          name?: Json;
          slug?: string;
          sort_order?: number;
          updated_at?: string;
        };
        Relationships: [];
      };
      product_documents: {
        Row: {
          created_at: string;
          file_name: string;
          id: string;
          kind: Database["public"]["Enums"]["document_kind"];
          product_id: string;
          sort_order: number;
          storage_path: string;
          title: Json | null;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          file_name: string;
          id?: string;
          kind: Database["public"]["Enums"]["document_kind"];
          product_id: string;
          sort_order?: number;
          storage_path: string;
          title?: Json | null;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          file_name?: string;
          id?: string;
          kind?: Database["public"]["Enums"]["document_kind"];
          product_id?: string;
          sort_order?: number;
          storage_path?: string;
          title?: Json | null;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "product_documents_product_id_fkey";
            columns: ["product_id"];
            isOneToOne: false;
            referencedRelation: "products";
            referencedColumns: ["id"];
          },
        ];
      };
      product_families: {
        Row: {
          created_at: string;
          description: Json | null;
          id: string;
          image_storage_path: string | null;
          name: Json;
          slug: string;
          sort_order: number;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          description?: Json | null;
          id?: string;
          image_storage_path?: string | null;
          name: Json;
          slug: string;
          sort_order?: number;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          description?: Json | null;
          id?: string;
          image_storage_path?: string | null;
          name?: Json;
          slug?: string;
          sort_order?: number;
          updated_at?: string;
        };
        Relationships: [];
      };
      product_photos: {
        Row: {
          alt_text: Json;
          created_at: string;
          id: string;
          is_primary: boolean;
          product_id: string;
          sort_order: number;
          storage_path: string;
          updated_at: string;
        };
        Insert: {
          alt_text: Json;
          created_at?: string;
          id?: string;
          is_primary?: boolean;
          product_id: string;
          sort_order?: number;
          storage_path: string;
          updated_at?: string;
        };
        Update: {
          alt_text?: Json;
          created_at?: string;
          id?: string;
          is_primary?: boolean;
          product_id?: string;
          sort_order?: number;
          storage_path?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "product_photos_product_id_fkey";
            columns: ["product_id"];
            isOneToOne: false;
            referencedRelation: "products";
            referencedColumns: ["id"];
          },
        ];
      };
      product_sectors: {
        Row: {
          product_id: string;
          sector_id: string;
        };
        Insert: {
          product_id: string;
          sector_id: string;
        };
        Update: {
          product_id?: string;
          sector_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "product_sectors_product_id_fkey";
            columns: ["product_id"];
            isOneToOne: false;
            referencedRelation: "products";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "product_sectors_sector_id_fkey";
            columns: ["sector_id"];
            isOneToOne: false;
            referencedRelation: "application_sectors";
            referencedColumns: ["id"];
          },
        ];
      };
      product_subfamilies: {
        Row: {
          created_at: string;
          description: Json | null;
          family_id: string;
          id: string;
          name: Json;
          slug: string;
          sort_order: number;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          description?: Json | null;
          family_id: string;
          id?: string;
          name: Json;
          slug: string;
          sort_order?: number;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          description?: Json | null;
          family_id?: string;
          id?: string;
          name?: Json;
          slug?: string;
          sort_order?: number;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "product_subfamilies_family_id_fkey";
            columns: ["family_id"];
            isOneToOne: false;
            referencedRelation: "product_families";
            referencedColumns: ["id"];
          },
        ];
      };
      products: {
        Row: {
          body_material_id: string | null;
          connection_type_id: string | null;
          created_at: string;
          description: Json | null;
          dn: number | null;
          id: string;
          is_published: boolean;
          name: Json;
          pn: number | null;
          reference: string;
          service_temp_max_c: number | null;
          service_temp_min_c: number | null;
          short_description: Json | null;
          slug: string;
          sort_order: number;
          standard_id: string | null;
          subfamily_id: string;
          trim_material_id: string | null;
          updated_at: string;
          weight_kg: number | null;
        };
        Insert: {
          body_material_id?: string | null;
          connection_type_id?: string | null;
          created_at?: string;
          description?: Json | null;
          dn?: number | null;
          id?: string;
          is_published?: boolean;
          name: Json;
          pn?: number | null;
          reference: string;
          service_temp_max_c?: number | null;
          service_temp_min_c?: number | null;
          short_description?: Json | null;
          slug: string;
          sort_order?: number;
          standard_id?: string | null;
          subfamily_id: string;
          trim_material_id?: string | null;
          updated_at?: string;
          weight_kg?: number | null;
        };
        Update: {
          body_material_id?: string | null;
          connection_type_id?: string | null;
          created_at?: string;
          description?: Json | null;
          dn?: number | null;
          id?: string;
          is_published?: boolean;
          name?: Json;
          pn?: number | null;
          reference?: string;
          service_temp_max_c?: number | null;
          service_temp_min_c?: number | null;
          short_description?: Json | null;
          slug?: string;
          sort_order?: number;
          standard_id?: string | null;
          subfamily_id?: string;
          trim_material_id?: string | null;
          updated_at?: string;
          weight_kg?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "products_body_material_id_fkey";
            columns: ["body_material_id"];
            isOneToOne: false;
            referencedRelation: "materials";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "products_connection_type_id_fkey";
            columns: ["connection_type_id"];
            isOneToOne: false;
            referencedRelation: "connection_types";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "products_standard_id_fkey";
            columns: ["standard_id"];
            isOneToOne: false;
            referencedRelation: "standards";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "products_subfamily_id_fkey";
            columns: ["subfamily_id"];
            isOneToOne: false;
            referencedRelation: "product_subfamilies";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "products_trim_material_id_fkey";
            columns: ["trim_material_id"];
            isOneToOne: false;
            referencedRelation: "materials";
            referencedColumns: ["id"];
          },
        ];
      };
      profiles: {
        Row: {
          created_at: string;
          full_name: string | null;
          id: string;
          role: Database["public"]["Enums"]["user_role"];
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          full_name?: string | null;
          id: string;
          role?: Database["public"]["Enums"]["user_role"];
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          full_name?: string | null;
          id?: string;
          role?: Database["public"]["Enums"]["user_role"];
          updated_at?: string;
        };
        Relationships: [];
      };
      quote_request_lines: {
        Row: {
          created_at: string;
          id: string;
          line_notes: string | null;
          product_id: string;
          quantity: number;
          quote_request_id: string;
          unit: Database["public"]["Enums"]["quote_line_unit"];
        };
        Insert: {
          created_at?: string;
          id?: string;
          line_notes?: string | null;
          product_id: string;
          quantity: number;
          quote_request_id: string;
          unit?: Database["public"]["Enums"]["quote_line_unit"];
        };
        Update: {
          created_at?: string;
          id?: string;
          line_notes?: string | null;
          product_id?: string;
          quantity?: number;
          quote_request_id?: string;
          unit?: Database["public"]["Enums"]["quote_line_unit"];
        };
        Relationships: [
          {
            foreignKeyName: "quote_request_lines_product_id_fkey";
            columns: ["product_id"];
            isOneToOne: false;
            referencedRelation: "products";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "quote_request_lines_quote_request_id_fkey";
            columns: ["quote_request_id"];
            isOneToOne: false;
            referencedRelation: "quote_requests";
            referencedColumns: ["id"];
          },
        ];
      };
      quote_requests: {
        Row: {
          attachment_storage_path: string | null;
          company_name: string;
          consent_personal_data: boolean;
          consent_recorded_at: string;
          contact_name: string;
          country: string;
          created_at: string;
          email: string;
          id: string;
          locale: string;
          message: string | null;
          phone: string | null;
          status: Database["public"]["Enums"]["quote_request_status"];
          updated_at: string;
        };
        Insert: {
          attachment_storage_path?: string | null;
          company_name: string;
          consent_personal_data: boolean;
          consent_recorded_at?: string;
          contact_name: string;
          country?: string;
          created_at?: string;
          email: string;
          id?: string;
          locale?: string;
          message?: string | null;
          phone?: string | null;
          status?: Database["public"]["Enums"]["quote_request_status"];
          updated_at?: string;
        };
        Update: {
          attachment_storage_path?: string | null;
          company_name?: string;
          consent_personal_data?: boolean;
          consent_recorded_at?: string;
          contact_name?: string;
          country?: string;
          created_at?: string;
          email?: string;
          id?: string;
          locale?: string;
          message?: string | null;
          phone?: string | null;
          status?: Database["public"]["Enums"]["quote_request_status"];
          updated_at?: string;
        };
        Relationships: [];
      };
      standards: {
        Row: {
          created_at: string;
          id: string;
          name: Json;
          slug: string;
          sort_order: number;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          name: Json;
          slug: string;
          sort_order?: number;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          name?: Json;
          slug?: string;
          sort_order?: number;
          updated_at?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      is_admin: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
      is_staff_or_admin: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
    };
    Enums: {
      document_kind:
        | "technical_datasheet"
        | "dimension_drawing"
        | "material_certificate_3_1"
        | "ce_declaration";
      quote_line_unit: "piece" | "pair" | "set" | "meter" | "kilogram" | "lot";
      quote_request_status:
        | "pending"
        | "in_review"
        | "quoted"
        | "closed"
        | "rejected";
      user_role: "admin" | "staff";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

export type Tables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Row"];

export type TablesInsert<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Insert"];

export type TablesUpdate<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Update"];

export type Enums<T extends keyof Database["public"]["Enums"]> =
  Database["public"]["Enums"][T];

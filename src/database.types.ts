export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      equipment: {
        Row: {
          created_at: string;
          id: string;
          metric: Database["public"]["Enums"]["equipment_metric"] | null;
          name: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          metric?: Database["public"]["Enums"]["equipment_metric"] | null;
          name: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          metric?: Database["public"]["Enums"]["equipment_metric"] | null;
          name?: string;
        };
        Relationships: [];
      };
      exercise: {
        Row: {
          created_at: string;
          created_by: string;
          description: string | null;
          force_type: string | null;
          id: string;
          instructions: string[] | null;
          is_deleted: boolean;
          name: string;
          primary_muscle: string;
          secondary_muscles: string[] | null;
          tags: string[] | null;
        };
        Insert: {
          created_at?: string;
          created_by?: string;
          description?: string | null;
          force_type?: string | null;
          id: string;
          instructions?: string[] | null;
          is_deleted?: boolean;
          name?: string;
          primary_muscle?: string;
          secondary_muscles?: string[] | null;
          tags?: string[] | null;
        };
        Update: {
          created_at?: string;
          created_by?: string;
          description?: string | null;
          force_type?: string | null;
          id?: string;
          instructions?: string[] | null;
          is_deleted?: boolean;
          name?: string;
          primary_muscle?: string;
          secondary_muscles?: string[] | null;
          tags?: string[] | null;
        };
        Relationships: [];
      };
      exercise_equipment: {
        Row: {
          equipment_id: string;
          exercise_id: string;
        };
        Insert: {
          equipment_id: string;
          exercise_id: string;
        };
        Update: {
          equipment_id?: string;
          exercise_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "exercise_equipment_equipment_id_fkey";
            columns: ["equipment_id"];
            isOneToOne: false;
            referencedRelation: "equipment";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "exercise_equipment_exercise_id_fkey";
            columns: ["exercise_id"];
            isOneToOne: false;
            referencedRelation: "exercise";
            referencedColumns: ["id"];
          }
        ];
      };
      workout: {
        Row: {
          completed_at: string | null;
          created_by: string;
          created_from: string | null;
          id: string;
          started_at: string;
        };
        Insert: {
          completed_at?: string | null;
          created_by?: string;
          created_from?: string | null;
          id?: string;
          started_at?: string;
        };
        Update: {
          completed_at?: string | null;
          created_by?: string;
          created_from?: string | null;
          id?: string;
          started_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "workout_created_from_fkey";
            columns: ["created_from"];
            isOneToOne: false;
            referencedRelation: "workout_blueprint";
            referencedColumns: ["id"];
          }
        ];
      };
      workout_blueprint: {
        Row: {
          assigned_to: string | null;
          created_at: string;
          created_by: string;
          created_from: string | null;
          id: string;
        };
        Insert: {
          assigned_to?: string | null;
          created_at?: string;
          created_by?: string;
          created_from?: string | null;
          id: string;
        };
        Update: {
          assigned_to?: string | null;
          created_at?: string;
          created_by?: string;
          created_from?: string | null;
          id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "workout_blueprint_created_from_fkey";
            columns: ["created_from"];
            isOneToOne: false;
            referencedRelation: "workout_template";
            referencedColumns: ["id"];
          }
        ];
      };
      workout_blueprint_item: {
        Row: {
          exercise_id: string;
          id: string;
          order: number;
          workout_blueprint_superset_id: string;
        };
        Insert: {
          exercise_id: string;
          id?: string;
          order: number;
          workout_blueprint_superset_id: string;
        };
        Update: {
          exercise_id?: string;
          id?: string;
          order?: number;
          workout_blueprint_superset_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "workout_blueprint_item_exercise_id_fkey";
            columns: ["exercise_id"];
            isOneToOne: false;
            referencedRelation: "exercise";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "workout_blueprint_item_workout_blueprint_superset_id_fkey";
            columns: ["workout_blueprint_superset_id"];
            isOneToOne: false;
            referencedRelation: "workout_blueprint_superset";
            referencedColumns: ["id"];
          }
        ];
      };
      workout_blueprint_set: {
        Row: {
          id: string;
          type: Database["public"]["Enums"]["exercise_execution"];
          value: number;
          weight: number | null;
          workout_blueprint_item_id: string;
        };
        Insert: {
          id?: string;
          type?: Database["public"]["Enums"]["exercise_execution"];
          value: number;
          weight?: number | null;
          workout_blueprint_item_id: string;
        };
        Update: {
          id?: string;
          type?: Database["public"]["Enums"]["exercise_execution"];
          value?: number;
          weight?: number | null;
          workout_blueprint_item_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "workout_blueprint_set_workout_blueprint_item_id_fkey";
            columns: ["workout_blueprint_item_id"];
            isOneToOne: false;
            referencedRelation: "workout_blueprint_item";
            referencedColumns: ["id"];
          }
        ];
      };
      workout_blueprint_superset: {
        Row: {
          id: string;
          order: number;
          workout_blueprint_id: string;
        };
        Insert: {
          id?: string;
          order: number;
          workout_blueprint_id: string;
        };
        Update: {
          id?: string;
          order?: number;
          workout_blueprint_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "workout_blueprint_superset_workout_blueprint_id_fkey";
            columns: ["workout_blueprint_id"];
            isOneToOne: false;
            referencedRelation: "workout_blueprint";
            referencedColumns: ["id"];
          }
        ];
      };
      workout_item: {
        Row: {
          exercise_id: string | null;
          id: string;
          order: number;
          workout_superset_id: string;
        };
        Insert: {
          exercise_id?: string | null;
          id?: string;
          order: number;
          workout_superset_id: string;
        };
        Update: {
          exercise_id?: string | null;
          id?: string;
          order?: number;
          workout_superset_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "workout_item_exercise_id_fkey";
            columns: ["exercise_id"];
            isOneToOne: false;
            referencedRelation: "exercise";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "workout_item_workout_superset_id_fkey";
            columns: ["workout_superset_id"];
            isOneToOne: false;
            referencedRelation: "workout_superset";
            referencedColumns: ["id"];
          }
        ];
      };
      workout_set: {
        Row: {
          id: string;
          type: Database["public"]["Enums"]["exercise_execution"];
          value: number;
          weight: number | null;
          workout_item_id: string;
        };
        Insert: {
          id?: string;
          type: Database["public"]["Enums"]["exercise_execution"];
          value: number;
          weight?: number | null;
          workout_item_id: string;
        };
        Update: {
          id?: string;
          type?: Database["public"]["Enums"]["exercise_execution"];
          value?: number;
          weight?: number | null;
          workout_item_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "workout_set_workout_item_id_fkey";
            columns: ["workout_item_id"];
            isOneToOne: false;
            referencedRelation: "workout_item";
            referencedColumns: ["id"];
          }
        ];
      };
      workout_superset: {
        Row: {
          id: string;
          order: number | null;
          workout_id: string;
        };
        Insert: {
          id?: string;
          order?: number | null;
          workout_id: string;
        };
        Update: {
          id?: string;
          order?: number | null;
          workout_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "workout_superset_workout_id_fkey";
            columns: ["workout_id"];
            isOneToOne: false;
            referencedRelation: "workout";
            referencedColumns: ["id"];
          }
        ];
      };
      workout_template: {
        Row: {
          created_at: string;
          created_by: string;
          id: string;
        };
        Insert: {
          created_at: string;
          created_by?: string;
          id?: string;
        };
        Update: {
          created_at?: string;
          created_by?: string;
          id?: string;
        };
        Relationships: [];
      };
      workout_template_item: {
        Row: {
          force_type: string | null;
          id: string;
          primary_muscle: string | null;
          secondary_muscles: string[] | null;
          workout_template_superset_id: string;
        };
        Insert: {
          force_type?: string | null;
          id?: string;
          primary_muscle?: string | null;
          secondary_muscles?: string[] | null;
          workout_template_superset_id: string;
        };
        Update: {
          force_type?: string | null;
          id?: string;
          primary_muscle?: string | null;
          secondary_muscles?: string[] | null;
          workout_template_superset_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "workout_template_item_workout_template_superset_id_fkey";
            columns: ["workout_template_superset_id"];
            isOneToOne: false;
            referencedRelation: "workout_template_superset";
            referencedColumns: ["id"];
          }
        ];
      };
      workout_template_superset: {
        Row: {
          id: string;
          order: number;
          workout_template_id: string;
        };
        Insert: {
          id: string;
          order: number;
          workout_template_id: string;
        };
        Update: {
          id?: string;
          order?: number;
          workout_template_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "workout_template_superset_workout_template_id_fkey";
            columns: ["workout_template_id"];
            isOneToOne: false;
            referencedRelation: "workout_template";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      clerk_user_id: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
    };
    Enums: {
      equipment_metric: "weight" | "resistance";
      exercise_execution: "rep" | "time";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
        Database["public"]["Views"])
    ? (Database["public"]["Tables"] &
        Database["public"]["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
    ? Database["public"]["Enums"][PublicEnumNameOrOptions]
    : never;

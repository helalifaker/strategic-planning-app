// Database entity types matching our Supabase schema

export type Organization = {
  id: string;
  name: string;
  description: string | null;
  created_by: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
};

export type Plan = {
  id: string;
  organization_id: string;
  name: string;
  description: string | null;
  baseline_year: number;
  created_by: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
};

export type VersionStatus = 'draft' | 'ready' | 'locked' | 'archived';

export type Version = {
  id: string;
  plan_id: string;
  name: string;
  description: string | null;
  status: VersionStatus;
  created_by: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
};

// Financial calculation input/output types
export type CalculationInput = {
  version_id: string;
  admin_assumptions: any;
  near_term_assumptions: any;
  version_assumptions: any;
  version_rent: any;
  org_tuition: any;
  ramp_template: any;
  capex_classes: any[];
  capex_additions: any[];
};

export type CalculationResult = {
  version_id: string;
  calculations: {
    pnl: any;
    balance_sheet: any;
    cash_flow: any;
  };
  convergence_status: string;
  iterations: number;
  max_cash_delta: number;
  calculation_date: string;
};

export type ConvergenceStatus = 'converged' | 'not_converged' | 'error';
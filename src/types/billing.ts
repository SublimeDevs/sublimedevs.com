export interface CreditsData {
  plan: string;
  periodStart: string | null;
  periodEnd: string | null;
  allowance: number;
  remaining: number;
}

export interface CreditsResponse {
  message: string;
  data: CreditsData;
}

export interface CreditHistoryResponse {
  message: string;
  data: unknown[];
}

export interface UpgradeLinkParams {
  plan: string;
  successUrl: string;
  cancelUrl: string;
}

export interface UpgradeLinkResponse {
  message: string;
  data: { url: string };
}

export interface PortalLinkParams {
  returnUrl: string;
}

export interface PortalLinkResponse {
  message: string;
  data: { url: string };
}

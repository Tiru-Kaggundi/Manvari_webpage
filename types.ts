/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export interface ContactFormData {
  name: string;
  workEmail: string;
  company: string;
  phone?: string;
  service: 'Recruitment and placement' | 'Executive search' | 'HR advisory' | 'Not sure';
  message: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  badge?: string;
  description: string;
  feeModel: string;
}

export interface WorkStep {
  number: string;
  title: string;
  description: string;
}

export interface ValueItem {
  title: string;
  description: string;
}
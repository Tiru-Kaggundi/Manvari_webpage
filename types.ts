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
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

export interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export type SearchModelType = 'retained' | 'contingency' | 'executive' | 'hr-advisory';

export interface SearchModel {
  id: SearchModelType;
  title: string;
  badge: string;
  description: string;
  idealFor: string;
  features: string[];
  engagementPeriod: string;
}

export interface IndustryPractice {
  id: string;
  title: string;
  iconName: string;
  roles: string[];
  description: string;
}

export interface SearchStage {
  step: string;
  title: string;
  timing: string;
  description: string;
  deliverables: string[];
}

export interface MandateInquiry {
  fullName: string;
  workEmail: string;
  phone: string;
  organization: string;
  searchType: SearchModelType;
  seniorityLevel: string;
  industryPractice: string;
  roleTitle: string;
  targetGeography: string;
  brief: string;
}
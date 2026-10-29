export type UserProfile = 'familia' | 'docente' | 'estudiante' | 'comunidad';

export type EducationalStage = 'inicial' | 'primaria' | 'secundaria';

export type MunamigoId = 'pompon' | 'lumi' | 'mora' | 'cora' | 'titi' | 'blu';

export interface Munamigo {
  id: MunamigoId;
  name: string;
  shape: string;
  personality: string;
  roleTitle: string;
  colorName: string;
  hexColor: string;
  accentColor: string;
  officialQuote: string;
  bio: string;
  functions: string[];
  pedagogicalRole: string;
}

export interface EducationalModule {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  category: 'fundamentos' | 'autoestima' | 'mitos' | 'digital' | 'alerta' | 'comunicacion';
  targetAudience: UserProfile[];
  characterId: MunamigoId;
  summary: string;
  contentSections: {
    heading: string;
    body: string;
    highlight?: string;
  }[];
  reflectionQuestion: string;
  practicalTip: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  audience: UserProfile[];
  stages: EducationalStage[];
  category: string;
  format: 'guia' | 'actividad' | 'protocolo' | 'infografia' | 'planificador';
  durationMinutes: number;
  materialsNeeded: string;
  recommendedUse: string;
  printableTitle: string;
  printableSections: {
    sectionTitle: string;
    paragraphs: string[];
    bulletPoints?: string[];
  }[];
  isVerified: boolean;
  isPopular?: boolean;
}

export interface ArgentineLaw {
  id: string;
  number: string;
  name: string;
  issuer: string;
  year: number;
  officialUrl: string;
  summary: string;
  munaApplication: string[];
  esiAxes?: string[];
  lastReviewDate: string;
  isVerified: boolean;
}

export interface ArgentineHelpCenter {
  id: string;
  name: string;
  type: 'urgencia' | 'linea_telefonica' | 'hospital_publico' | 'centro_salud_mental' | 'ong_especializada';
  jurisdiction: 'Nacional' | 'CABA' | 'Buenos Aires' | 'Córdoba' | 'Santa Fe' | 'Mendoza' | 'Otras Jurisdicciones';
  audience: string;
  phone: string;
  alternativePhone?: string;
  address: string;
  website?: string;
  hours: string;
  accessRequirements: string;
  is24h: boolean;
  isEmergency: boolean;
  lastVerifiedDate: string;
  isVerified: boolean;
  notes?: string;
}

export interface TeacherActivityPlan {
  id: string;
  title: string;
  stage: EducationalStage;
  topic: string;
  scheduledDate: string;
  characterId: MunamigoId;
  notes: string;
}

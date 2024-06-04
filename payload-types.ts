/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    media: Media;
    testimonials: Testimonial;
    designModels: DesignModel;
    modelsCategories: ModelsCategory;
    categories: Category;
    blog: Blog;
    pages: Page;
    forms: Form;
    'form-submissions': FormSubmission;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {
    header: Header;
    footer: Footer;
    metadata: Metadatum;
  };
  locale: null;
  user: User & {
    collection: 'users';
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: 'admin' | 'author';
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt: string;
  createdBy?: (number | null) | User;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "testimonials".
 */
export interface Testimonial {
  id: number;
  customerName: string;
  customerRating: '5' | '4' | '3' | '2' | '1';
  service: string;
  title: string;
  testimonialDescription: string;
  customerImage?: number | Media | null;
  slug?: string | null;
  createdBy?: (number | null) | User;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "designModels".
 */
export interface DesignModel {
  id: number;
  title: string;
  description: string;
  floorArea: number;
  bedrooms: number;
  comfortRooms: number;
  category: number | ModelsCategory;
  content: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  featuredImage: number | Media;
  floorPlanImage: number | Media;
  layout?:
    | {
        slider: {
          image: number | Media;
          alt: string;
          id?: string | null;
        }[];
        id?: string | null;
        blockName?: string | null;
        blockType: 'imageCarousel';
      }[]
    | null;
  slug?: string | null;
  createdBy?: (number | null) | User;
  meta?: {
    title?: string | null;
    description?: string | null;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "modelsCategories".
 */
export interface ModelsCategory {
  id: number;
  title: string;
  slug?: string | null;
  createdBy?: (number | null) | User;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories".
 */
export interface Category {
  id: number;
  title: string;
  slug?: string | null;
  createdBy?: (number | null) | User;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "blog".
 */
export interface Blog {
  id: number;
  title: string;
  description: string;
  categories: number | Category;
  readTime: number;
  blogImage: number | Media;
  blogContent: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  slug?: string | null;
  createdBy?: (number | null) | User;
  meta?: {
    title?: string | null;
    description?: string | null;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: number;
  title: string;
  layout?:
    | (
        | {
            header: string;
            description: string;
            milestones: {
              label: string;
              value: number;
              id?: string | null;
            }[];
            featuredImage: number | Media;
            id?: string | null;
            blockName?: string | null;
            blockType: 'about';
          }
        | {
            blockHeader: string;
            cta: {
              ctaLabel: string;
              ctaLink: number | Page;
              id?: string | null;
            }[];
            mainFeature: number | Blog;
            secondaryFeature: number | Blog;
            thirdFeature: number | Blog;
            id?: string | null;
            blockName?: string | null;
            blockType: 'blogCollection';
          }
        | {
            cards: {
              label: string;
              description: string;
              image: number | Media;
              id?: string | null;
            }[];
            id?: string | null;
            blockName?: string | null;
            blockType: 'cardWithTitle';
          }
        | {
            header: string;
            subheader?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'centeredText';
          }
        | {
            blockHeader: string;
            blockDescription: string;
            id?: string | null;
            blockName?: string | null;
            blockType: 'designModelsGallery';
          }
        | {
            image?: number | Media | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'fullWidthImage';
          }
        | {
            form: number | Form;
            enable2ColumnLayout?: boolean | null;
            header?: string | null;
            content?: {
              root: {
                type: string;
                children: {
                  type: string;
                  version: number;
                  [k: string]: unknown;
                }[];
                direction: ('ltr' | 'rtl') | null;
                format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                indent: number;
                version: number;
              };
              [k: string]: unknown;
            } | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'formBlock';
          }
        | {
            header: string;
            description: string;
            id?: string | null;
            blockName?: string | null;
            blockType: 'headerAndDescription';
          }
        | {
            headline: string;
            subHeadline: string;
            buttons: {
              buttonLabel: string;
              buttonLink: number | Page;
              primaryButton?: boolean | null;
              id?: string | null;
            }[];
            ctaHeadline: string;
            ctaLink: {
              ctaLabel: string;
              ctaLink: number | Page;
              id?: string | null;
            }[];
            mainFeature: number | DesignModel;
            secondFeature: number | DesignModel;
            thirdFeature: number | DesignModel;
            id?: string | null;
            blockName?: string | null;
            blockType: 'hero';
          }
        | {
            blockHeader: string;
            blockDescription: string;
            id?: string | null;
            blockName?: string | null;
            blockType: 'infiniteBlogScroll';
          }
        | {
            slider: {
              image: number | Media;
              alt: string;
              id?: string | null;
            }[];
            id?: string | null;
            blockName?: string | null;
            blockType: 'imageCarousel';
          }
        | {
            body?: {
              root: {
                type: string;
                children: {
                  type: string;
                  version: number;
                  [k: string]: unknown;
                }[];
                direction: ('ltr' | 'rtl') | null;
                format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                indent: number;
                version: number;
              };
              [k: string]: unknown;
            } | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'simpleRichText';
          }
        | {
            blockHeader: string;
            blockDescription: string;
            firstTestimonial: number | Testimonial;
            secondTestimonial: number | Testimonial;
            thirdTestimonial: number | Testimonial;
            id?: string | null;
            blockName?: string | null;
            blockType: 'testimonialsBlock';
          }
        | {
            header: string;
            subheader?: string | null;
            featuredImage: number | Media;
            id?: string | null;
            blockName?: string | null;
            blockType: 'twoColumnImageLeft';
          }
        | {
            header: string;
            subheader?: string | null;
            featuredImage: number | Media;
            id?: string | null;
            blockName?: string | null;
            blockType: 'twoColumnImageRight';
          }
      )[]
    | null;
  slug?: string | null;
  createdBy?: (number | null) | User;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "forms".
 */
export interface Form {
  id: number;
  title: string;
  fields?:
    | (
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            required?: boolean | null;
            defaultValue?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'checkbox';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'email';
          }
        | {
            message?: {
              root: {
                type: string;
                children: {
                  type: string;
                  version: number;
                  [k: string]: unknown;
                }[];
                direction: ('ltr' | 'rtl') | null;
                format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                indent: number;
                version: number;
              };
              [k: string]: unknown;
            } | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'message';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            defaultValue?: number | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'number';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            defaultValue?: string | null;
            options?:
              | {
                  label: string;
                  value: string;
                  id?: string | null;
                }[]
              | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'select';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            defaultValue?: string | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'text';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            defaultValue?: string | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'textarea';
          }
      )[]
    | null;
  submitButtonLabel?: string | null;
  confirmationType?: ('message' | 'redirect') | null;
  confirmationMessage?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  redirect?: {
    url: string;
  };
  emails?:
    | {
        emailTo?: string | null;
        cc?: string | null;
        bcc?: string | null;
        replyTo?: string | null;
        emailFrom?: string | null;
        subject: string;
        message?: {
          root: {
            type: string;
            children: {
              type: string;
              version: number;
              [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
          };
          [k: string]: unknown;
        } | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "form-submissions".
 */
export interface FormSubmission {
  id: number;
  form: number | Form;
  submissionData?:
    | {
        field: string;
        value: string;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header".
 */
export interface Header {
  id: number;
  logo: number | Media;
  cta: {
    ctaLabel: string;
    ctaLink: number | Page;
    id?: string | null;
  }[];
  navLinks: {
    label: string;
    link: number | Page;
    id?: string | null;
  }[];
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer".
 */
export interface Footer {
  id: number;
  logo: number | Media;
  title: string;
  subheader: string;
  contactImageButton?:
    | {
        imageButton: number | Media;
        contactLink: number | Page;
        id?: string | null;
      }[]
    | null;
  motto?: string | null;
  quickLinks: {
    label: string;
    link: number | Page;
    id?: string | null;
  }[];
  location: {
    city: string;
    streetAddress: string;
    id?: string | null;
  }[];
  socialMediaLinks: {
    name: string;
    icon: number | Media;
    url: string;
    id?: string | null;
  }[];
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "metadata".
 */
export interface Metadatum {
  id: number;
  icon: number | Media;
  seoImage: number | Media;
  title: string;
  description: string;
  keywords: {
    keyword: string;
    id?: string | null;
  }[];
  updatedAt?: string | null;
  createdAt?: string | null;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}
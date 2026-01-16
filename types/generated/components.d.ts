import type { Schema, Struct } from '@strapi/strapi';

export interface RelationSharedImageBlock extends Struct.ComponentSchema {
  collectionName: 'components_relation_shared_image_blocks';
  info: {
    displayName: 'shared.image-block';
  };
  attributes: {
    alt: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface RelationSharedMainValue extends Struct.ComponentSchema {
  collectionName: 'components_relation_shared_main_values';
  info: {
    displayName: 'shared.main-value';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface RelationSharedStat extends Struct.ComponentSchema {
  collectionName: 'components_relation_shared_stats';
  info: {
    displayName: 'shared.stat';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'relation.shared-image-block': RelationSharedImageBlock;
      'relation.shared-main-value': RelationSharedMainValue;
      'relation.shared-stat': RelationSharedStat;
    }
  }
}

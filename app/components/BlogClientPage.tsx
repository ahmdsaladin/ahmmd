"use client"
import { BlogPostSchema } from "@/app/components/seo/BlogPostSchema";
import { Button, Column, Heading, Row, Text, Icon, AvatarGroup, HeadingNav } from "@/app/components/ui";
import ScrollToHash from "@/app/components/ScrollToHash";
import { formatDate } from "@/app/utils/formatDate";
import { CustomMDX } from "@/app/components/mdx";

export default function BlogClientPage({ metadata, avatars, schemaData, postContent }: any) {
  return (
    <Row fillWidth>
      <Row maxWidth="xl" hide="m">
        {/* Empty row for layout */}
      </Row>
      <Row fillWidth horizontal="center">
        <Column as="section" maxWidth="xs" gap="24">
          <BlogPostSchema {...schemaData} />
          <Button data-border="rounded" href="/blog" weight="default" variant="tertiary" size="s" prefixIcon="chevronLeft">
            Posts
          </Button>
          <Heading variant="display-strong-s">{metadata.title}</Heading>
          <Row gap="12" vertical="center">
            {avatars.length > 0 && <AvatarGroup size="s" avatars={avatars} />}
            <Text variant="body-default-s" onBackground="neutral-weak">
              {metadata.publishedAt && formatDate(metadata.publishedAt)}
            </Text>
          </Row>
          <Column as="article" fillWidth>
            <CustomMDX source={postContent} />
          </Column>
          <ScrollToHash />
        </Column>
      </Row>
      <Column maxWidth="xl" paddingLeft="40" fitHeight position="sticky" top="80" gap="16" hide="m">
        <Row
          gap="12"
          paddingLeft="2"
          vertical="center"
          onBackground="neutral-medium"
          textVariant="label-default-s"
        >
          <Icon name="document" size="xs" />
          On this page
        </Row>
        <HeadingNav fitHeight/>
      </Column>
    </Row>
  );
} 
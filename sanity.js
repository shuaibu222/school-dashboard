import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'jn3cjugc',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-04-27',
  token:
    'skW2w3wwGdfFstWtuwYDcRL3rYVrlS4CKRwMfArfmU7YnDv9t2FhHg9metnNy0tRi7JQp2nqruKGTqeERashnF7KHjRzTAQftaBmze1ZLntLumdH8SfsuRi9YFC7drSi9lxljRQjIoWOJMyVWfiPNEjKduw5vaSrTILMXkL2i3HjZNAZL01i',
});

const builder = imageUrlBuilder(client);

export default function urlFor(source) {
  return builder.image(source);
}

// formkit.config.ts
import { generateClasses } from '@formkit/themes'

export default {
  config: {
    classes: generateClasses({
      global: {
        input: 'border border-gray-300 rounded',
        messages: 'text-red-500 text-sm',
        invalid: 'border-red-500',
      },
    }),
  },
}

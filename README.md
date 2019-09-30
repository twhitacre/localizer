# The Localizer

This is a simple tool that will help you add localizations to your projects.

Currently, this app only works with English -> [Another Language]

## How it Works

First, you need to copy & paste in a JSON file.

It should mimic the following structure:

```
{
  "property": {
    "en": "translated text",
    "sp": "translated text",
  },
  "property2": {
    "en": "translated text",
    "sp": "translated text",
  }
}
```

Note, that `en` is required for each property, as that is what we show when translating.

The original version was written in about 2 hours and there is no tests written and very few error checks. Sorry. It does however work pretty well. If it gets used, maybe I'll go back and make it a bit more secure.

## Contributing

This was made to fit a specific need, and might not hit all use-cases. Feel free to fork the project and adjust if you need something altered.

If you do find a bug or want to add something (like, ahem, tests), feel free to create a PR. 
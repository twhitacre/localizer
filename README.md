# The Localizer

This is a simple tool that will help you add localizations to your JavaScript projects.

Currently, this app only works with English -> [Another Language]

## How it Works

First, you need paste in a JavaScript object. Note, that I said JavaScript and not JSON. This is because, most users will store this as an object in their code and I don't want to add extra steps.

It should mimic the following structure:

```
{

  property: {
    en: 'translated text',
    sp: 'translated text',
  },

  property2: {
    en: 'translated text',
    sp: 'translated text',
  }

}
```

Note, that `en` is required for each property, as that is what we show when translating.

The original version was written in about 2 hours and there is no tests written and very few error checks. Sorry. It does however work pretty well. If it gets used, maybe I'll go back and make it a bit more secure.

Also, a quick note that the way the code is parsed is by using the `eval()` function. This is a known dangerous function, so be careful where you deploy it.

## Contributing

This was made to fit a specific need, and might not hit all use-cases. Feel free to fork the project and adjust if you need something altered.

If you do find a bug or want to add something (like, ahem, tests), feel free to create a PR. 
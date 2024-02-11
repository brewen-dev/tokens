# @brewen-dev/tokens
Style tokens for @brewen-dev/design system.

This repository is a modified version of Shopify's [Polaris tokens](https://github.com/Shopify/polaris/blob/main/polaris-tokens) to fit the needs of @brewen-dev/design.

## Usage
To use the tokens in your project, you can install the package from npm, using the GitHub registry.
```bash
npm install @brewen-dev/tokens
```

Then you can import the tokens in your project.
```ts
import { themes } from '@brewen-dev/tokens';
```
And use them in your styles.
```scss
@import '~@brewen-dev/tokens/scss/styles.scss';
```
There is also a built css version of the tokens available in the `css` folder.
```scss
@import '~@brewen-dev/tokens/css/styles.css';
```

## License
This project is licensed under either of the following, at your option:
- Apache License, Version 2.0, ([LICENSE-APACHE](LICENSE-APACHE) or http://www.apache.org/licenses/LICENSE-2.0)
- MIT License ([LICENSE-MIT](LICENSE-MIT) or http://opensource.org/licenses/MIT)

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in this project by you, as defined in the Apache-2.0 license, shall be dual licensed as above, without any additional terms or conditions.

Additionally, the tokens in this repository are based on Shopify's [Polaris tokens](https://github.com/Shopify/polaris/blob/main/polaris-tokens), which are licensed under their own [license](https://github.com/Shopify/polaris/blob/main/LICENSE.md).

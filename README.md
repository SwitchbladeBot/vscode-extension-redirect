# vscode-extension-redirect
Discord doesn't allow links with protocols other than `http://` and `https://`, so we wrote this simple redirection Cloudflare Worker to be able to create discord-embeddable installation links for extensions.

## Usage

`https://vscoderedirect.switchblade.xyz/EXTENSION_NAME`

### Examples

- https://vscoderedirect.switchblade.xyz/icrawl.discord-vscode
- https://vscoderedirect.switchblade.xyz/dbaeumer.jshint

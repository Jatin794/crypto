# Buy Me A Beer
You're a nice person, eh? That's great. You can use your crypto coins in multiple ways, one of those being to give your favourite creators that sweet boost of dopamine.

If that includes me, one easy way is to do it directly using a coin that's cheap to transfer (I'd recommend Litecoin or Bitcoin Cash) using [this link](https://commerce.coinbase.com/checkout/1d651c8e-7a25-4850-a78c-e0e2f40e100c) or this button (they're the same):

<div> <a class="donate-with-crypto" href="https://commerce.coinbase.com/checkout/1d651c8e-7a25-4850-a78c-e0e2f40e100c"> Donate with Crypto </a> <script src="https://commerce.coinbase.com/v1/checkout.js?version=201807"> </script> </div>

Might add more, but for now, drop me a message if you prefer a coin which isn't in that list (Cardano, Stellar, Neo, Harmony, Tron, BNB etc), and we'll figure something. You can contact me using the form below (click [here](https://tripetto.app/run/VG94PPD89G) if you don't see embed) (preferred) or via Jabber/XMPP at `shinsengumi@404.city`.

<div id="tripetto"></div>
<script src="https://cdn.jsdelivr.net/npm/tripetto-runner-foundation"></script>
<script src="https://cdn.jsdelivr.net/npm/tripetto-runner-classic"></script>
<script src="https://cdn.jsdelivr.net/npm/tripetto-services"></script>
<script>
var tripetto = TripettoServices.init({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiUVNqUUxIZWVWVWtqWkVZcXI2c0JwRzF6Z2dUMVl0alByVGFCckc3ek16RT0iLCJkZWZpbml0aW9uIjoicHFSalhYYzQ4T3hPTU9kOEFBSnUvV0ErdDlCWm92RXJaL2JxM2ZCK0pqST0iLCJ0eXBlIjoiY29sbGVjdCJ9.S8-vuzdK1NsxiLwB2TBI6jtDQdhkAWZCRdtokj93wx0" });

TripettoClassic.run({
    element: document.getElementById("tripetto"),
    definition: {"prologue":{"title":"Contact Form (Testing)"},"clusters":[{"id":"efea58c779c4abc732c899965ad85611c8b71f82f3ac43fc6454950751a7dd83","name":"Contact","nodes":[{"id":"a9e5d2a4dd22d59c7c2b4c11a3d7963b2bc0dd87592ab2e8258198b36fedc3a6","name":"Give email","nameVisible":true,"slots":[{"id":"1fedb6c8c1058522d9188a203648e0d471eaad47626191ee686ca329635d72de","type":"string","kind":"static","reference":"email","label":"Email address","required":true}],"block":{"type":"tripetto-block-email","version":"5.0.0"}},{"id":"79c9ca0139c949f90259ddd246f11ef24673a9ab91d731347458a8d3ba3344b5","name":"Message","nameVisible":true,"slots":[{"id":"21faa1f8407bcfb29fc2f66ba1825f105f40fe04d60499a274040f0c973707bf","type":"text","kind":"static","reference":"value","label":"Multi-line text"}],"block":{"type":"tripetto-block-textarea","version":"5.0.0"}},{"id":"234ab5c224214f069cdf342b0481c5b5cdb3fa1b2c5b978169b0924691b88643","disabled":true,"name":"Yes","nameVisible":true,"slots":[{"id":"bc0a7fb97636a88cd69c0d5742f292ce7295b25f46fe85bba646dfde4cd6381e","type":"text","kind":"static","reference":"value","label":"Text"}],"block":{"type":"tripetto-block-text","version":"5.0.2"}}]}],"builder":{"name":"tripetto","version":"4.3.2"}},
    attachments: tripetto.attachments,
    onSubmit: tripetto.onSubmit,
    snapshot: tripetto.snapshot,
    onPause: tripetto.onPause,
    persistent: true
});
</script>

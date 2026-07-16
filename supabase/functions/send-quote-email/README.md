# send-quote-email

Supabase Edge Function that emails website form submissions to the sales team.

Every enquiry submitted through the site (the quote flyout, the homepage quote
form, and the contact page — they all call `submitQuoteRequest`) is saved to the
`quote_requests` table and then forwarded here to be emailed.

## Routing

| Field | Address(es)                                          |
| ----- | ---------------------------------------------------- |
| To    | sales@solar-365.co.uk                                |
| Cc    | jordan@solar-365.co.uk                               |
| Bcc   | lewis@solar-365.co.uk, lucie@solar-365.co.uk         |

Reply-To is set to the person who submitted the form, so replying goes straight
to the customer.

## Configuration

Emails are sent via [Resend](https://resend.com). Set these secrets before
deploying:

```bash
supabase secrets set RESEND_API_KEY=re_xxxxxxxx
supabase secrets set FROM_EMAIL="Solar 365 Website <noreply@solar-365.co.uk>"
```

`FROM_EMAIL` must use a domain verified in your Resend account.

## Deploy

```bash
supabase functions deploy send-quote-email
```

To change who receives submissions, edit `TO_EMAIL`, `CC_EMAILS`, and
`BCC_EMAILS` at the top of `index.ts` and redeploy.

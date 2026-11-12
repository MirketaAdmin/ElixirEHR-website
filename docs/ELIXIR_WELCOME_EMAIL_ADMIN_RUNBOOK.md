# Elixir lead welcome email: Salesforce admin runbook

**Date:** 11 Nov 2026
**Org:** `00Dd0000000hivg`. Both Elixir and Mirketa Web-to-Lead forms post to this org.
**Status:** NOT FIXED YET. The cause and the fix are in Salesforce configuration. The web team has no Salesforce access: the Salesforce CLI on the web machine has no authenticated org. Nothing below has been verified inside Salesforce.

**For:** the Salesforce admin of the org.

## 1. What we know (verified)

- The Elixir website sends **no email** itself. No code in the repository sends mail, and none references `timesheet.force.com` or a verification link.
- Every Elixir form posts natively to Salesforce Web-to-Lead with:
  - `oid=00Dd0000000hivg`
  - `lead_source=Web`
  - the page URL in **Lead Source Section** (`00N0W000008z5D6`). This field is in the current code. It reaches Salesforce once that code is deployed.
- The Mirketa website posts to the **same org**, with the **same** `lead_source=Web`, and fills the same Lead Source Section field with `https://www.mirketa.com/...`.
- So any automation that keys only on "a new Web lead" treats Elixir leads exactly like Mirketa leads.

## 2. Most likely cause (to be confirmed by the admin)

The email has Mirketa branding, a "verify your email" message and a `timesheet.force.com` link. `timesheet.force.com` is a Salesforce **Site** in this org, most likely Mirketa's. The automation that sends Mirketa's verification email to new Web-to-Lead leads has no condition that excludes Elixir leads. It is one of these:

| Candidate | Where to look |
|---|---|
| **Lead auto-response rule** whose matching entry uses a Mirketa verification template | Setup → **Lead Auto-Response Rules** → active rule → entries (criteria + template) |
| **Web-to-Lead "Default Response Template"** | Setup → **Web-to-Lead** → Default Response Template |
| **Record-triggered Flow** or Process Builder on Lead (create) that sends an email or email alert | Setup → **Flows** (filter: Object = Lead, trigger = created); also **Process Builder** |
| **Workflow rule / Email alert** on Lead | Setup → **Workflow Rules** (Lead), **Email Alerts** |
| **Apex trigger** on Lead that sends email (e.g. a double opt-in to the timesheet Site) | Setup → Object Manager → Lead → **Triggers** |

**Fastest way to find it:** Setup → **Email Log Files**. Request a log for the time of an Elixir test submission and look up the Elixir test email address. The log shows the sending mechanism, and the template or Flow named there is the one responsible. Alternatively, search the email templates (Classic and Lightning) for "timesheet.force.com" or "Click Here".

## 3. Fix (admin; Mirketa's flow stays exactly as it is)

**Do not change** the Mirketa template, its content or Mirketa's site. Only add a rule for Elixir in front of it, or exclude Elixir from it.

### 3.1 Create the Elixir template (text only)

Setup → Classic Email Templates → New → **Text**.

- **Name:** `Elixir – Lead Welcome`
- **Subject:** `Thank You for Connecting with Elixir`
- **Body** (no links, no buttons, no URLs):

```
Dear {!Lead.FirstName} {!Lead.LastName},

Thank you for connecting with Elixir!

We have successfully received your information. Our team appreciates your interest and will get in touch with you shortly.

Thank you for choosing Elixir.

Best Regards,
Elixir Team
```

- **Sender:** an Elixir address, e.g. `info@elixirehr.com`, added and verified under Setup → **Organization-Wide Email Addresses**. Do not send from a Mirketa address.
- **Turn off the HTML version and any letterhead.** A Text template sends only the plain body.

### 3.2 Route Elixir leads to it

**If the source is the Lead auto-response rule**, add a **new first entry** (order 1) to the active rule:

- **Criteria:** `Lead: Lead Source Section` **contains** `elixirehr.com`
- **Template:** `Elixir – Lead Welcome`
- **From:** the Elixir org-wide address

The existing Mirketa entry stays, unchanged, after it. Auto-response rules stop at the first matching entry, so each lead gets exactly one email.

**If the source is a Flow, Process, workflow rule or Apex trigger:**

- add an entry condition that excludes Elixir leads, e.g. `Lead Source Section does not contain elixirehr.com`;
- send the Elixir welcome through the auto-response entry above;
- leave the Mirketa path otherwise untouched.

**If the source is the Web-to-Lead "Default Response Template":** it applies to both sites. Move Mirketa's template into a Mirketa auto-response entry with criteria `Lead Source Section contains mirketa.com`, and add the Elixir entry first.

### 3.3 Alternative criterion

If preferred, the web team can send a distinct Lead Source (e.g. `Elixir Website`) instead of `Web`. The value must first exist as an **active** Lead Source picklist value; tell the web team the exact value. The criteria would then be `Lead Source equals Elixir Website`.

## 4. Test (after the Elixir site's current build is deployed)

1. Submit the Elixir Contact Us form with a **new** test email you can read. Tick reCAPTCHA by hand.
2. Check the received email:
   - subject "Thank You for Connecting with Elixir"
   - plain text only
   - no Mirketa, no `timesheet.force.com`, no links, buttons or verification text
   - exactly one email
3. Salesforce: the Lead exists, and Lead Source Section = `https://www.elixirehr.com/contact-us/#contact`.
4. Submit the **Mirketa** contact form with another test address. Mirketa's existing email still arrives exactly as before.
5. Delete the test Leads.

## 5. Results (admin fills in)

| Item | Result |
|---|---|
| Mechanism that sent the Mirketa verification email (rule / template / Flow / Apex) | |
| Its name | |
| Change made | |
| Elixir test: email received, text only, correct content, one email | |
| Elixir test Lead created, Lead Source Section correct | |
| Mirketa test: unchanged email received | |

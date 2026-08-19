# Testausführung

Der Standardbefehl `pnpm test` führt ausschließlich nicht-versendende Tests für Authentifizierung und serverseitige SEO-Metadaten aus. Er darf für Routineprüfungen verwendet werden und löst keine Test-E-Mails aus.

Die Kontaktformular-, SMTP- und Mailer-Integrationstests sind bewusst getrennt. Der Befehl `pnpm test:integration` kann reale SMTP-Versandvorgänge an `kontakt@sprachassistent.net` auslösen und darf deshalb nur nach ausdrücklicher Freigabe ausgeführt werden.

-- Create the email_signups table to capture newsletter/notification emails
create table if not exists email_signups (
  id         uuid        primary key default gen_random_uuid(),
  email      text        not null,
  source     text        not null default 'unknown',
  created_at timestamptz not null default now(),

  -- one row per email address (deduplication)
  unique (email)
);

-- Row-level security: no public read, only insert allowed for anon/authenticated users
alter table email_signups enable row level security;

create policy "Anyone can sign up"
  on email_signups for insert
  to anon, authenticated
  with check (true);

-- Index for fast email lookups
create index if not exists email_signups_email_idx on email_signups (email);

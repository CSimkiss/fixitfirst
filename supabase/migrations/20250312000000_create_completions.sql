-- Create the completions table to track which guides a user has completed
create table if not exists completions (
  id           uuid        primary key default gen_random_uuid(),
  user_id      uuid        not null references auth.users(id) on delete cascade,
  guide_slug   text        not null,
  completed_at timestamptz not null default now(),
  created_at   timestamptz not null default now(),

  -- one completion record per user per guide
  unique (user_id, guide_slug)
);

-- Row-level security: users can only read and write their own rows
alter table completions enable row level security;

create policy "Users can read own completions"
  on completions for select
  using (auth.uid() = user_id);

create policy "Users can insert own completions"
  on completions for insert
  with check (auth.uid() = user_id);

create policy "Users can update own completions"
  on completions for update
  using (auth.uid() = user_id);

create policy "Users can delete own completions"
  on completions for delete
  using (auth.uid() = user_id);

-- Index for fast per-user lookups
create index if not exists completions_user_id_idx on completions (user_id);

## bundle exec rails tailwindcss:watch

## psql -U piero -d trello_clone_development

## SELECT pg_terminate_backend(pg_stat_activity.pid)
FROM pg_stat_activity
WHERE pg_stat_activity.datname = 'trello_clone_development'
  AND pid <> pg_backend_pid();


## bundle exec rails db:migrate db:test:prepare


## DELETE FROM likes
WHERE id IN (
  SELECT id FROM (
    SELECT id,
           ROW_NUMBER() OVER (partition BY user_id, tweet_id ORDER BY id) AS rnum
    FROM likes
  ) t
  WHERE t.rnum > 1
);
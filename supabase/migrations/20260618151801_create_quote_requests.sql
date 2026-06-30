CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  postcode text NOT NULL,
  installation_type text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "insert_quote_requests" ON quote_requests
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "select_quote_requests" ON quote_requests
  FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "update_quote_requests" ON quote_requests
  FOR UPDATE TO authenticated
  USING (true) WITH CHECK (true);

CREATE POLICY "delete_quote_requests" ON quote_requests
  FOR DELETE TO authenticated
  USING (true);

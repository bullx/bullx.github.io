-- Create contact_messages table for storing form submissions
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  is_read BOOLEAN DEFAULT false NOT NULL
);

-- Enable Row Level Security
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policies for contact_messages
CREATE POLICY "insert_contact_messages" ON contact_messages
  FOR INSERT WITH CHECK (true);

GRANT USAGE ON SCHEMA public TO anon, authenticated, service_role;
GRANT ALL ON ALL TABLES IN SCHEMA public TO service_role;
GRANT INSERT ON TABLE contact_messages TO anon;

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://hormzsxjgosqpmlxcysx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhvcm16c3hqZ29zcXBtbHhjeXN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY0NzEzNzksImV4cCI6MjAzMjA0NzM3OX0.WTE0C0Y41LLcgdcNYjfJlTxpRZUyzlTuM7B_56tfbrA';

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;

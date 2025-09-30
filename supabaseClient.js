import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  "https://qzzqoqibcxbntznusulm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6enFvcWliY3hibnR6bnVzdWxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkxODYyOTEsImV4cCI6MjA3NDc2MjI5MX0.TyOddDEulS5ma624twQEMQsvZrsmw8OvyuF-e4OeG5g"
)

export default supabase
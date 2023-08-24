import { createClient } from "@supabase/supabase-js";

// Substitua com suas próprias credenciais do Supabase
const supabaseUrl = "https://sggiwheitubgrosmhwqk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNnZ2l3aGVpdHViZ3Jvc21od3FrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI0NjM3MjksImV4cCI6MjAwODAzOTcyOX0.Q7E-GJeZMm-y_dwcYh3ZK5xbqrx2TL6Kzebmnryp_zo";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

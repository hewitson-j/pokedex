import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://eybwaoqprtuxdguktrwb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5Yndhb3FwcnR1eGRndWt0cndiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI2NzI5NjMsImV4cCI6MjAxODI0ODk2M30.v2C8SQMXNn3Z0g-bsc6uYCxEQV3dfmliuEzuWFy_VLI" ||
  "";

const supabase = createClient(supabaseUrl, supabaseKey);
console.log("Supabase Loaded");

export default supabase;

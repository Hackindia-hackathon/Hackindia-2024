import { createClient, PostgrestError } from "@supabase/supabase-js";
import { supabase } from "../supabase";

interface SupabaseResult {
    data?: { count: number };
    error?: PostgrestError;
}
///
const getPlays = async (slug: string) => {
    const { data: views, error } = await supabase
        .from("playcount_base")
        .select(`count`)
        .match({ slug: slug })
        .single();
    if (error && error.details.includes(`0 rows`)) {
        const { data, error } = await supabase
            .from(`playcount_base`)
            .insert({ slug: slug, count: 0 })
            .single();
        // return data?.count;
    }
    // if (!views) {
    //     return 0;
    // }
    // return views.count;
};
///
const registerPlays = async (slug: string): Promise<void> => {
    const { data, error } = await supabase.rpc("playcount_base", {
        slug_text: slug,
    });
};
export { getPlays, registerPlays };
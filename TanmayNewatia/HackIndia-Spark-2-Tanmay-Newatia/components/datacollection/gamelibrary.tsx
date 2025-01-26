import { createClient, PostgrestError } from "@supabase/supabase-js";
import { supabase } from "../supabase";

interface SupabaseResult {
    data?: { count: number };
    error?: PostgrestError;
}
///
const getLibrary = async (slug: string, id: number, address: string, type: number) => {
    const { data: views, error } = await supabase
        .from("library_base")
        .select(`game_id, game_name`)
        .match({ wallet_address: address })
        .single();
    if (type == 1) {
        if (error && error.details.includes(`0 rows`)) {
            const { data, error } = await supabase
                .from(`library_base`)
                .insert({ game_name: [slug], game_id: [id], wallet_address: address })
                .single();
            // return data?.count;
        }
    }
    if (!views) {
        return 0;
    }
    return views;
};
///
const registerLibrary = async (slug: string, id: number, address: string): Promise<void> => {
    const { data, error } = await supabase.rpc("addlibrary_base", {
        name: slug,
        id: id,
        address: address
    });
};
export { getLibrary, registerLibrary };
import { createClient, PostgrestError } from "@supabase/supabase-js";
import { supabase } from "../supabase";
import * as referralCodes from "referral-codes";

interface SupabaseResult {
    data?: { count: number };
    error?: PostgrestError;
}
///
const getAccount = async (address: string, join_referral: string) => {
    const { data: views, error } = await supabase
        .from("profile_base")
        .select(`referral,quest`)
        .match({ wallet_address: address })
        .single();
    if (error && error.details.includes(`0 rows`)) {
        const referral = referralCodes.generate({
            length: 8,
            count: 1,
            charset: referralCodes.charset(referralCodes.Charset.ALPHANUMERIC),
        });
        const { data, error } = await supabase
            .from(`profile_base`)
            .insert({
                referral: referral[0], join_referral: join_referral, wallet_address: address, quest: {
                    "pepe-maze": {
                        "type": "game",
                        "status": "active"
                    },
                    "soul-saver": {
                        "type": "game",
                        "status": "active"
                    },
                    "out-of-sight": {
                        "type": "game",
                        "status": "active"
                    },
                    "tennis": {
                        "type": "game",
                        "status": "active"
                    },
                    "cinemare": {
                        "type": "game",
                        "status": "active"
                    },
                    "3d-box-shooter": {
                        "type": "game",
                        "status": "active"
                    },
                    "mini-space": {
                        "type": "game",
                        "status": "active"
                    }
                }
            })
            .single();
        // return data?.count;
    }
    if (!views) {
        return 0;
    }
    return views;
};

const updateQuest = async (wallet_address: string, json: any): Promise<void> => {
    const { data, error } = await supabase.rpc("updatequest_base", {
        json: json,
        address: wallet_address
    });
};
export { getAccount, updateQuest };
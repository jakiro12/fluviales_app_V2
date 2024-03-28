import { supabase } from "@/app/utils/supabase";

export const reqCurrentUser= async(user,pass)=>{
    const { data:register, error,status } = await supabase.from('UsersData')
    .select()
    .match({"emailUser":`${user}`,
            "userPass": `${pass}`});
    if (!error) {
        return {status_req:status,user_req:register}
    } else {
        return  {error_message:error}
    }
}


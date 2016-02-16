def process_key(k): 
  if (.[k] | type == "string") then { ( $file + "---" + k):.[k] } else {} end;
def process_subkey(sk): 
  if (.[sk]) 
  then ( [ ( .[sk] | keys[] as $i 
    | if (.[$i].title ) 
      then { key: ( $file
                  + "---"
                  + sk 
                  + "---" 
                  + if (.[$i].link) and (.[$i].link | length) > 3
                    then .[$i].link
                    elif (.[$i].status) 
                    then .[$i].status
                    else ( $i | tostring )
                    end 
                )
           , value: .[$i].title } 
      else {}
      end 
    ) ] | from_entries ) 
  else {}
  end ;
[ process_key("title")
, process_key("bio")
, process_key("introduction")
, process_key("heading")
, process_key("fail")
, process_subkey("action")
, process_subkey("checklist")
, process_subkey("status")
, process_subkey("items")
] | add
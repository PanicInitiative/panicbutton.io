import "jqconfig" as $d;


def do_each(sk; k):
    keys[] as $kk | 
    if ($d::d[0].key[] as $key | $key == $kk)
    then 
      { key: ( $file
                  + "---"
                  + (sk | debug) 
                  + "---" 
                  + if ( k.link) and (k.link | length) > 3
                    then k.link
                    elif (k.status) 
                    then k.status
                    elif (k.src)
                    then k.src
                    else (sk | index(k) | debug | tostring )
                    end
                  + "---"
                  + ($kk | debug)
                )
           , value: .[$kk] | debug } 
    else
    empty
    end;
  
def process_key(k): 
  if (.[k] | type == "string") then { ( $file + "---" + k):.[k] } else{} end;

def process_subkey(sk):
    if (.[sk])
    then ( [ ( .[sk] | .[] | do_each(sk; .)) ] | from_entries )
    else 
    empty
    end;

  
[ ($d::d[0].subkeys[] as $sk | process_subkey($sk)), ($d::d[0].key[] as $key | process_key($key)) ] | add




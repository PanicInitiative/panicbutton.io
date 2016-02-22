import "jqconfig" as $d;


def do_each(key; sk; k):
    keys[] as $kk |
    if (($d::d[0].key[] as $key | $key | inside($kk)) and (.[$kk] | type == "string"))
      then 
        { key: ( ($file)
                    + "---"
                    + (key ) 
                    + "---" 
                    + ($kk)
                  )
             , value: .[$kk] }
    elif ($d::d[0].subkeys[] as $skey | $skey | inside($kk))
    then 
      (.[$kk] | .[] | do_each($kk; sk; .) )


    else
      empty
    end;
  
def process_key(k):
  if(.[])
  then 
    keys[] as $key | if($key | contains(k))
      then 
        if(.[$key] | type == "string")
        then 
          { ( $file + "---" + $key): .[$key] }
        else
        empty
        end
    else
    empty
    end
  else
  empty
  end;



def process_subkey(sk):
  if(.[])
  then 
    keys[] as $key | if(($key | contains(sk)) and (.[$key] != null))
        then
           ( .[$key] ) | if (type == "array") 
           then
              ([ .[] | do_each($key; sk; .) ] | from_entries )
           elif (type == "object") 
           then 
            ([do_each($key; sk; .) ] | from_entries )
           else
           empty
           end

      else
        empty
      end

  else
  empty
  end;

  
[ ($d::d[0].subkeys[] as $sk | process_subkey($sk)), ($d::d[0].key[] as $key | process_key($key)) ] | add




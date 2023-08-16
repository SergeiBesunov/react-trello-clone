import {useRef, useEffect} from 'react'

 const useEffectSkipFirstRender = (fn:()=>void, args:any[]) => {
    const isMounted = useRef(false);
    useEffect(() => {
      if (isMounted.current) {
        return fn();
      }
      isMounted.current = true
    }, args)
  }

  export default useEffectSkipFirstRender

  
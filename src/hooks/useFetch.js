import { useEffect, useState, useRef } from 'react'

export default function useFetch( url ) {

    const isMounted = useRef( true );

    const [state, setstate] = useState({data: null, loading: true, error: null});

    useEffect(() => {

        return () => {
            isMounted.current = false;
            console.log(isMounted);
        }
    }, []);
    

    useEffect( () => {

        setstate( { data: null, loading: true, error: null } );

        fetch( url )
        .then( resp => resp.json() )
        .then( data => {

                if( isMounted.current ){
                    setstate({
                        loading: false,
                        error: null,
                        data
                    });

                    console.log(isMounted);
                }else{
                    console.log('setState no se llamó');
                }
        } );
    }, [ url ] );

    return state;

}

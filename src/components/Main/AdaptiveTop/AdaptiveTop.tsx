import React, {useState} from 'react';
import AdaptiveSearch from "./AdaptiveSearch/AdaptiveSearch";
import AdaptiveHeader from "./AdaptiveHeader/AdaptiveHeader";

const AdaptiveTop = () => {

    const [isSearchVisible, setIsSearchVisible] = useState(false)

    const handleSearchVisible = (value: boolean) => {
        setIsSearchVisible(value)
    }

    return (
        <>
            {
                isSearchVisible &&
                    <AdaptiveSearch handleSearchVisible={handleSearchVisible} />
            }
                    <AdaptiveHeader handleSearchVisible={handleSearchVisible}/>
        </>
    );
};

export default AdaptiveTop;
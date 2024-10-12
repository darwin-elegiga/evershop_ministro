import PropTypes from 'prop-types';
import React from 'react';
import StoreIcon from '@heroicons/react/solid/esm/OfficeBuildingIcon';
import RegionIcon from '@heroicons/react/solid/esm/MapIcon';
import NavigationItemGroup from '@components/admin/cms/NavigationItemGroup';

export default function MarketplaceMenuGroup() {
    return (
        <NavigationItemGroup
            id="marketplaceMenuGroup"
            name="Logos"
            items={[
                {
                    Icon: StoreIcon,
                    url: "admin/reward",
                    title: 'Logos'
                }
            ]}
        />
    );
}



export const layout = {
    areaId: 'adminMenu',
    sortOrder: 20
};



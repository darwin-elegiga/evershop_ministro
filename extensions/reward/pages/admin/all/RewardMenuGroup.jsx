import PropTypes from 'prop-types';
import React from 'react';
import StoreIcon from '@heroicons/react/solid/esm/OfficeBuildingIcon';
import RegionIcon from '@heroicons/react/solid/esm/MapIcon';
import NavigationItemGroup from '@components/admin/cms/NavigationItemGroup';

export default function MarketplaceMenuGroup({ rewardGrid }) {
    return (
        <NavigationItemGroup
            id="marketplaceMenuGroup"
            name="Logos"
            items={[
                {
                    Icon: StoreIcon,
                    url: rewardGrid,
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


export const query = `
  query Query {
    rewardGrid: url(routeId:"rewardGrid")
  }
`;

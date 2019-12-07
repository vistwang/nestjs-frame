import { Document } from 'mongoose';

export interface AssetArrayInfo {
    id: string; // asset
    symbol: string;
    verified: boolean;
    logoUrl?: string; // logo is provided with verified asset
    name: string;
    quantity: number; // asset balance at this address;
    issuer: string; // the asset isusser address
}

// 2. api/asset/:id

export interface AssetInfo {
    id: string; // asset
    symbol: string;
    verified: boolean;
    logoUrl?: string; // logo is provided with verified asset
    name: string;
    quantity: number; // asset balance at this address;
    issuer: string; // the asset isusser address
    total: number; //  the issued amount at fusion network for this asset
    changeable: boolean;  //  is the issue amount changeable?,
    block: number; // the block height this asset issued at
     //  which platform this asset issued orginally
    platform: {
        bitcoin: boolean;
        etheruem: boolean;
        erc20: boolean;
        fusion: boolean;
    };
    decimal: number;  //  the decimal amount for this asset
}

// 3. api/asset/:id/decimal

export interface DecimalInfo{
    id: string;
    symbol: string;
    decimal: number;
}

export interface AssetCallback {

}

export interface AssetDoc extends Document {
    id: string;
    symbol: string;
    verified: boolean;
    logoUrl?: string;
    name: string;
    quantity: number;
    issuer: string;
}



const WalletBalance = ({ balance }) =>
{
    return (
        <div>
            <div className="flex justify-between mt-2 mr-2">
                <p className="text-black">NEAR</p>
                <p className="font-bold">{balance}</p>
            </div>
            <div className="text-slate-400 tracking-tight text-xs text-left">
                View on NEAR Wallet
            </div>
        </div>
    )
} 

export default WalletBalance
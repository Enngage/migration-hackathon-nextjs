export const Logo = () => (
	<div className="flex items-center gap-2.5">
		<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
			<defs>
				<linearGradient id="coinGradient" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
					<stop offset="0%" stopColor="#3B82F6" />
					<stop offset="100%" stopColor="#1D4ED8" />
				</linearGradient>
			</defs>
			{/* Outer coin */}
			<circle cx="18" cy="18" r="18" fill="url(#coinGradient)" />
			{/* Mid ring */}
			<circle cx="18" cy="18" r="12.5" stroke="white" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
			{/* Inner filled circle */}
			<circle cx="18" cy="18" r="7" fill="white" fillOpacity="0.12" />
			{/* Currency stroke — vertical bar */}
			<line x1="18" y1="11" x2="18" y2="25" stroke="white" strokeWidth="1.75" strokeLinecap="round" />
			{/* Upper arc */}
			<path d="M13.5 15.5 Q18 12.5 22.5 15.5" stroke="white" strokeWidth="1.75" strokeLinecap="round" fill="none" />
			{/* Lower arc */}
			<path d="M13.5 20.5 Q18 23.5 22.5 20.5" stroke="white" strokeWidth="1.75" strokeLinecap="round" fill="none" />
		</svg>
		<span className="text-2xl font-black tracking-tight text-[#1B273A]" style={{ fontVariantNumeric: "tabular-nums" }}>
			coin
		</span>
	</div>
);

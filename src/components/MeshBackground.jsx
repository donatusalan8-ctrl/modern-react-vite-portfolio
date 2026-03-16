const MeshBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1),rgba(0,0,0,1))]"></div>
      <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)] blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_70%)] blur-[120px]"></div>
      <div className="absolute top-[20%] right-[10%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.1),transparent_70%)] blur-[100px]"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      ></div>
    </div>
  )
}

export default MeshBackground

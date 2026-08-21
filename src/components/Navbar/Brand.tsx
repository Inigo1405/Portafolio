import logo from "@assets/logo.png"

export function Brand(){
  return(
    <div className="grid grid-cols-[auto_1fr]">
      <div>
        <img 
          className="h-10 w-auto"
          src={logo} 
          alt="Iñigo Quintana Delgadillo" 
        />
      </div>

      <div className="grid grid-rows-2">
        <div>Iñigo</div>
        <div>Quintana Delgadillo</div>
      </div>
    </div>
  );
};

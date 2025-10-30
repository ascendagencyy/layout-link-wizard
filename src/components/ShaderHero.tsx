import { ShaderAnimation } from "@/components/ui/shader-animation";
import AnimatedShaderBackground from "@/components/ui/animated-shader-background";

const ShaderHero = () => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-background to-card/30">
      <AnimatedShaderBackground />
      <ShaderAnimation />
      <span className="absolute pointer-events-none z-10 text-center text-5xl md:text-7xl leading-none font-semibold tracking-tighter whitespace-pre-wrap text-white">
        Ascend
      </span>
    </div>
  );
};

export default ShaderHero;

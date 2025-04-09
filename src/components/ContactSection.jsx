import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";

export function ContactSection() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <span className="inline-block w-10 h-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"></span>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Contact Me
            </h2>
            <span className="inline-block w-10 h-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"></span>
          </div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 text-gradient leading-tight">
            Let's Work Together
          </h3>
          <p className="text-stone-600 dark:text-zinc-400 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
            Have a project in mind, something you want to build together, or simply want to connect? 
            Feel free to reach out—I'm always open to a good conversation!
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-xl p-8 animate-fade-in opacity-0 relative z-40" style={{ animationDelay: "0.2s" }}>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Your name" 
                    required 
                    className="placeholder:text-stone-400 dark:placeholder:text-zinc-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="Your email" 
                    required 
                    className="placeholder:text-stone-400 dark:placeholder:text-zinc-500"
                  />
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <label htmlFor="subject" className="block text-sm font-medium">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  name="subject" 
                  placeholder="What is this regarding?" 
                  required 
                  className="placeholder:text-stone-400 dark:placeholder:text-zinc-500"
                />
              </div>
              
              <div className="space-y-2 mb-6">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  name="message" 
                  rows={5}
                  placeholder="Your message" 
                  required 
                  className="placeholder:text-stone-400 dark:placeholder:text-zinc-500"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white dark:text-zinc-900 font-medium"
              >
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in opacity-0 relative z-40" style={{ animationDelay: "0.3s" }}>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="w-6 h-6 text-primary"
                >
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-stone-700 dark:text-zinc-100">Phone</h3>
              <p className="text-stone-600 dark:text-zinc-400">+46 728 536 662</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="w-6 h-6 text-primary"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-stone-700 dark:text-zinc-100">Email</h3>
              <p className="text-stone-600 dark:text-zinc-400">nabilelbajdi@hotmail.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="w-6 h-6 text-primary"
                >
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-stone-700 dark:text-zinc-100">Location</h3>
              <p className="text-stone-600 dark:text-zinc-400">Stockholm, Sweden</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="bg-primary rounded-lg overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 bg-primary-foreground">
              <div className="flex items-center gap-4">
                <img
                  src="/placeholder.svg"
                  alt="AI Tool Logo"
                  width={48}
                  height={48}
                  className="rounded-full"
                  style={{ aspectRatio: "48/48", objectFit: "cover" }}
                />
                <h1 className="text-2xl font-bold">AI Tool Pro</h1>
              </div>
              <div className="flex items-center gap-2">
                <StarIcon className="w-5 h-5 fill-yellow-500" />
                <span className="font-semibold">4.8</span>
                <span className="text-primary-foreground/80">(256 reviews)</span>
              </div>
            </div>
            <div className="p-6">
              <p className="text-primary-foreground/80 mb-4">
                AI Tool Pro is a powerful and versatile AI-powered tool that can help you automate a wide range of
                tasks, from content creation to data analysis. With its advanced natural language processing
                capabilities, you can quickly and easily generate high-quality text, images, and more.
              </p>
              <Button
                href="https://example.com/ai-tool-pro"
                className="bg-primary-foreground text-primary hover:bg-primary/90 focus:ring-2 focus:ring-primary/50 focus:outline-none"
              >
                Visit Product
              </Button>
            </div>
          </div>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>User Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold">John Doe</div>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <StarIcon className="w-4 h-4" />
                        <StarIcon className="w-4 h-4" />
                        <StarIcon className="w-4 h-4" />
                        <StarIcon className="w-4 h-4" />
                        <StarIcon className="w-4 h-4" />
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      I've been using AI Tool Pro for a few months now and it's been a game-changer for my business. The
                      text generation capabilities are incredible, and the integration with my workflow has been
                      seamless.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                    <AvatarFallback>SA</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold">Sarah Anderson</div>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <StarIcon className="w-4 h-4" />
                        <StarIcon className="w-4 h-4" />
                        <StarIcon className="w-4 h-4" />
                        <StarIcon className="w-4 h-4" />
                        <StarIcon className="w-4 h-4 text-muted-foreground" />
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      I've tried a few different AI tools, but AI Tool Pro stands out for its ease of use and the
                      quality of the output. The customer support has also been exceptional.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                    <AvatarFallback>MJ</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold">Michael Johnson</div>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <StarIcon className="w-4 h-4" />
                        <StarIcon className="w-4 h-4" />
                        <StarIcon className="w-4 h-4" />
                        <StarIcon className="w-4 h-4" />
                        <StarIcon className="w-4 h-4" />
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      I'm really impressed with the capabilities of AI Tool Pro. It's helped me save so much time on
                      content creation and research. Highly recommended!
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex items-center justify-between">
                <div className="text-muted-foreground">Showing 3 of 256 reviews</div>
                <Button variant="outline">View All Reviews</Button>
              </div>
            </CardFooter>
          </Card>
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Add a Review</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">Rate this tool:</span>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <button type="button" aria-label="1 star">
                      <StarIcon className="w-5 h-5" />
                    </button>
                    <button type="button" aria-label="2 stars">
                      <StarIcon className="w-5 h-5" />
                    </button>
                    <button type="button" aria-label="3 stars">
                      <StarIcon className="w-5 h-5" />
                    </button>
                    <button type="button" aria-label="4 stars">
                      <StarIcon className="w-5 h-5" />
                    </button>
                    <button type="button" aria-label="5 stars">
                      <StarIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <Textarea
                  placeholder="Share your thoughts about AI Tool Pro..."
                  rows={3}
                  className="w-full rounded-md border border-muted/40 focus:border-primary focus:ring-1 focus:ring-primary"
                />
                <Button
                  type="submit"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-2 focus:ring-primary/50 focus:outline-none"
                >
                  Submit Review
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
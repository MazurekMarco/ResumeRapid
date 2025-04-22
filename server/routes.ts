import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // This application doesn't require any server-side functionality
  // as everything is handled client-side with localStorage
  
  const httpServer = createServer(app);
  return httpServer;
}

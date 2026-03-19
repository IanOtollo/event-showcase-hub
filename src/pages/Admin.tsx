import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus, Image, Video, MapPin, Tag, Trash2, Upload, LayoutGrid, List, Eye, Settings, Shield } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { galleryItems, categories, type GalleryItem } from "@/data/galleryData";
import { auth } from "@/lib/auth";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Admin = () => {
  const [items] = useState<GalleryItem[]>(galleryItems);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [newEntry, setNewEntry] = useState({
    title: "",
    category: "" as EventCategory,
    location: "",
    eventType: ""
  });
  
  const user = auth.getUser();
  const isAdmin = user?.role === "admin";
  const canEdit = user?.role === "admin" || user?.role === "editor";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-12 container mx-auto px-4">
        {/* ... existing header and stats ... */}
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Shield className="h-4 w-4 text-primary" />
              <p className="text-primary text-sm uppercase tracking-[0.25em] font-medium">Dashboard • {user?.role}</p>
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold">Admin Panel</h1>
          </div>
          <div className="flex gap-3">
            <Button asChild variant="outline" size="sm" className="border-border text-foreground">
              <Link to="/portfolio"><Eye className="mr-2 h-4 w-4" />View Portfolio</Link>
            </Button>
            {canEdit && (
              <Button size="sm" onClick={() => setShowUploadModal(true)} className="bg-primary text-primary-foreground hover:bg-gold-dark">
                <Plus className="mr-2 h-4 w-4" />Upload New
              </Button>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Items", value: items.length, icon: LayoutGrid },
            { label: "Photos", value: items.filter(i => i.mediaType === "Photo").length, icon: Image },
            { label: "Videos", value: items.filter(i => i.mediaType === "Video").length, icon: Video },
            { label: "Categories", value: categories.length - 1, icon: Tag },
          ].map((stat) => (
            <div key={stat.label} className="bg-gradient-card rounded-lg p-5 border border-border">
              <div className="flex items-center gap-3 mb-2">
                <stat.icon className="h-4 w-4 text-primary" />
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</span>
              </div>
              <p className="font-display text-2xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6">
          <Input placeholder="Search items..." className="max-w-xs bg-secondary border-border" />
          <div className="flex gap-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded ${viewMode === "grid" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded ${viewMode === "list" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Items */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {items.map((item) => (
              <motion.div
                key={item.id}
                layout
                className="bg-gradient-card rounded-lg overflow-hidden border border-border group"
              >
                <div className="relative aspect-video">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <Button size="sm" variant="outline" className="text-xs border-foreground/30 text-foreground"><Eye className="mr-1 h-3 w-3" />View</Button>
                    {isAdmin && (
                      <Button size="sm" variant="destructive" className="text-xs"><Trash2 className="mr-1 h-3 w-3" />Delete</Button>
                    )}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-sm mb-2 truncate">{item.title}</h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="outline" className="text-xs border-primary/30 text-primary">{item.category}</Badge>
                    <Badge variant="secondary" className="text-xs">{item.mediaType}</Badge>
                  </div>
                  <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />{item.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 bg-gradient-card rounded-lg p-3 border border-border">
                <img src={item.image} alt={item.title} className="w-20 h-14 object-cover rounded" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-sm truncate">{item.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                    <span>{item.category}</span>
                    <span>•</span>
                    <span>{item.location}</span>
                    <span>•</span>
                    <span>{item.mediaType}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-foreground"><Eye className="h-4 w-4" /></Button>
                  {isAdmin && (
                    <Button size="sm" variant="ghost" className="text-destructive hover:text-destructive"><Trash2 className="h-4 w-4" /></Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Upload Modal */}
        {showUploadModal && (
          <div className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowUploadModal(false)}>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-card rounded-lg border border-border max-w-lg w-full p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="font-display text-xl font-bold mb-6">Upload New Media</h2>

              <div className="border-2 border-dashed border-border rounded-lg p-10 text-center mb-6 hover:border-primary/30 transition-colors cursor-pointer">
                <Upload className="h-10 w-10 mx-auto mb-3 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Drag & drop files or click to browse</p>
                <p className="text-xs text-muted-foreground mt-1">Supports JPG, PNG, MP4, MOV</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Title</label>
                  <Input placeholder="Event title" className="bg-secondary border-border" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Category</label>
                    <Select onValueChange={(v) => setNewEntry({...newEntry, category: v as EventCategory})}>
                      <SelectTrigger className="bg-secondary border-border">
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.filter(c => c !== "All").map((cat) => (
                          <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Location</label>
                    <Input placeholder="e.g. Nairobi, Kenya" className="bg-secondary border-border" />
                  </div>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Event Type</label>
                  <Input placeholder="e.g. Corporate Conference" className="bg-secondary border-border" />
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <Button variant="outline" className="flex-1 border-border" onClick={() => setShowUploadModal(false)}>Cancel</Button>
                <Button className="flex-1 bg-primary text-primary-foreground hover:bg-gold-dark">Upload</Button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
